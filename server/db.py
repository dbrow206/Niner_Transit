from sqlalchemy import create_engine, Integer, Column, String, DateTime, SmallInteger, Float, ForeignKey, extract, and_
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
from datetime import date, time, datetime
import csv
from tqdm import tqdm
import psycopg2

# Create DB
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


# Create our datapoint table
# > The `StopPoint` class is a Python class that inherits from the `Base` class, and has a bunch of columns that are
# Defining the columns of the table.
# defined as class attributes
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
        """
        The __repr__ function is used to return a string representation of the object
        :return: The bus number and the date and time of the bus.
        """
        return str(self.bus) + str(self.date_time)


# > The `StopSummary` class is a Python class that inherits from the `Base` class, and has a `stop` column that is a
# string, and `on`, `off`, `on_count`, `off_count`, `on_average`, and `off_average` columns that are integers
class StopSummary(Base):
    __tablename__ = 'stop_summary'
    stop = Column(String, primary_key=True)
    on = Column(Integer)
    off = Column(Integer)
    on_count = Column(Integer)
    off_count = Column(Integer)
    on_average = Column(Float)
    off_average = Column(Float)

# `RouteSummary` is a class that inherits from `Base` and has a table called `route_summary` with columns `route`, `on`,
# `on_count`, `on_average`, and `peak_hour`
class RouteSummary(Base):
    __tablename__ = 'route_summary'
    route = Column(String, primary_key=True)
    on = Column(Integer)
    on_count = Column(Integer)
    on_average = Column(Float)
    peak_hour = Column(Integer)


# Create our User table
# The UserTable class is a table in the database that has two columns: email and userid. The email column is a string that
# cannot be null, and the userid column is an integer that is the primary key, cannot be null, and autoincrements.
class UserTable(Base):
    __tablename__ = 'user_data'
    email = Column(String, nullable=False)
    userid = Column(Integer, primary_key=True, nullable=False, autoincrement=True)

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




# Create our Feedback table
class Feedback(Base):
    __tablename__ = 'feedback'
    comment = Column(String, nullable=False)
    commenter_id = Column(Integer, ForeignKey("user_data.userid"))
    comment_id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)

    commenter = relationship("UserTable", foreign_keys=commenter_id)


