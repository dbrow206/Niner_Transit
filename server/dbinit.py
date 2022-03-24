from sqlalchemy import create_engine, Integer, Column, String, DateTime, SmallInteger, Float, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker,  relationship
from datetime import date, time, datetime
import csv
from tqdm import tqdm
import psycopg2
#Create DB
debug = False
engine = create_engine('postgresql+psycopg2://postgres:waffle@localhost:5432/TransitData')
try:
    engine.connect()
    print("Connection Succeeded!")
except Exception:
    print("Connection Failed!")
Base = declarative_base()
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()

#Create our datapoint table
class StopPoint(Base):
    cache_ok = True
    __tablename__ = 'transit_data'
    data_id = Column(Integer, autoincrement=True)
    date_time = Column(DateTime, primary_key=True)
    bus = Column(SmallInteger, primary_key=True)
    count = Column(SmallInteger)
    lat = Column(Float)
    long = Column(Float)
    route = Column(String)
    stop = Column(String)
    onoff = Column(String, primary_key=True)

    def __repr__(self):
        return str(self.bus) + str(self.date_time)

class StopSummary(Base):
    __tablename__ = 'stop_summary'
    stop = Column(String, primary_key=True)
    on = Column(Integer)
    off = Column(Integer)
    on_count = Column(Integer)
    off_count = Column(Integer)
    on_average = Column(Float)
    off_average = Column(Float)

class RouteSummary(Base):
    __tablename__ = 'route_summary'
    route = Column(String, primary_key=True)
    on = Column(Integer)
    on_count = Column(Integer)
    on_average = Column(Float)
    peak_hour = Column(Integer)

#Create our User table
class UserTable(Base):
    __tablename__ = 'user_data'
    email = Column(String, nullable=False)
    userid = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    api_key = Column(String, nullable=False)

#Create our peak riders table
class LineTimes(Base):
    __tablename__ = 'line_times'
    line = Column(String, primary_key=True, nullable=False)
    hour_1 = Column(Integer)
    hour_2 = Column(Integer)
    hour_3 = Column(Integer)
    hour_4 = Column(Integer)
    hour_5 = Column(Integer)
    hour_6 = Column(Integer)
    hour_7 = Column(Integer)
    hour_8 = Column(Integer)
    hour_9 = Column(Integer)
    hour_10 = Column(Integer)
    hour_11 = Column(Integer)
    hour_12 = Column(Integer)
    hour_13 = Column(Integer)
    hour_14 = Column(Integer)
    hour_15 = Column(Integer)
    hour_16 = Column(Integer)
    hour_17 = Column(Integer)
    hour_18 = Column(Integer)
    hour_19 = Column(Integer)
    hour_20 = Column(Integer)
    hour_21 = Column(Integer)
    hour_22 = Column(Integer)
    hour_23 = Column(Integer)
    hour_0 = Column(Integer)
    peak_hour = Column(Integer)


#Create our Feedback table
class Feedback(Base):
    __tablename__ = 'feedback'
    comment = Column(String, nullable=False)
    commenter_id = Column(Integer, ForeignKey("user_data.userid"))
    comment_id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    
    commenter = relationship("UserTable", foreign_keys=commenter_id)


#DROP ALL TABLES IF THEY EXIST TO AVOID KEY ERRORS!
try:
    Base.metadata.drop_all(engine)
    session.commit()
except Exception:
    print("Tables Dont exist")
#Create our tables in engine
Base.metadata.create_all(engine)
#Columns are
#Date	Time	Bus	Count	On off	Latitude	Longitude	Route	Stop
#0      1       2   3       4       5           6           7       8
#Our Strftime string is %m/%d/%Y-%H:%M:%S, assuming we are formatting the time as date - time
#Or str(line[0]) + "-" + str(line[1)

stop_data_dict = {}
stop_template = {"on":0,"off":0,"stop_count":0}

route_data_dict = {}

failed_reads = 0


with open('resources/data_pt1.csv', newline='',encoding="utf8") as data:
  prev_value = None
  hour_dict = [0]*24
  reader = csv.reader(data)
  for line in tqdm(reader):
    try:
        data_date_time = datetime.strptime((str(line[0]) + "-" + str(line[1])), '%m/%d/%Y-%H:%M:%S')
        #Create our object
        if line[8] not in stop_data_dict:
            stop_data_dict[line[8]] = {"on":0,"off":0,"stop_count":0, "on_count":1,"off_count":1}
        if line[7] not in route_data_dict.keys():
            route_data_dict[line[7]] = {"count":1,"stops":1,"peak":1,'hours': hour_dict.copy()}
        stop_data = StopPoint(date_time = data_date_time,
                              bus = int(line[2]),
                              count = int(line[3]),
                              onoff = line[4],
                              lat = float(line[5]),
                              long = float(line[6]),
                              route = line[7],
                              stop = line[8])
        # Set up our route values etc
        route_data_dict[line[7]]["count"] +=int(line[3])
        route_data_dict[line[7]]["stops"] += 1
        route_data_dict[line[7]]["hours"][int(data_date_time.hour)] += int(line[3])
        # Set up our summary values etc
        stop_data_dict[line[8]][line[4]] +=int(line[3])
        stop_data_dict[line[8]]['stop_count'] +=1
        stop_data_dict[line[8]][line[4]+'_count'] += 1
        # I AM CONSIDERING STORING THE ROUTE AND STOP SUMMARIES IN MEMORY,
        # THE ONLY DOWNSIDE TO THAT IS WE NEED TO EITHER REACQUIRE THEM
        # EVERYTIME WE LAUNCH OR STORE THEM SOMEWHERE
        # PERF DIFFERENCE IS PROBABLY NEGLIGIBLE
        if not prev_value == (str(data_date_time) + line[4]):
            #We want to make sure it's not a duplicate value, so we check it against the last key value we received
            1==1
            session.add(stop_data)
        prev_value = str(data_date_time) + line[4]
        if debug:
            print("Added " + str(line))
    except Exception:
        #Quite a few of our rows don't provide lat/long, so we're going to discard them
        #We don't want that data in our database
        if debug:
            print("Failed to add " + str(line))
        failed_reads +=1

for key in stop_data_dict:
    summary = StopSummary(on = stop_data_dict[key]["on"],
                          off=stop_data_dict[key]["off"],
                          off_count=stop_data_dict[key]["off_count"],
                          on_count=stop_data_dict[key]["on_count"],
                          stop=key,
                          on_average=stop_data_dict[key]["on"]/stop_data_dict[key]["on_count"],
                          off_average=stop_data_dict[key]["off"] / stop_data_dict[key]["off_count"]
                          )
    session.add(summary)

for key in route_data_dict:
    print(route_data_dict[key]["hours"])
    summary = RouteSummary(on = route_data_dict[key]["count"],
                          on_count=route_data_dict[key]["stops"],
                          on_average=route_data_dict[key]["count"]/route_data_dict[key]["stops"],
                          route=key,
                          peak_hour = max(range(len(route_data_dict[key]["hours"],)), key=route_data_dict[key]["hours"].__getitem__)
                          )
    session.add(summary)

#session.add(stop_1)
#session.add(user_1)
print("Failed to add " + str(failed_reads) + " rows")
print(stop_data_dict)
session.commit()


