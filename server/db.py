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


# Create our User table
class UserTable(Base):
    __tablename__ = 'user_data'
    email = Column(String, nullable=False)
    userid = Column(Integer, primary_key=True, nullable=False, autoincrement=True)




# Create our Feedback table
class Feedback(Base):
    __tablename__ = 'feedback'
    comment = Column(String, nullable=False)
    commenter_id = Column(Integer, ForeignKey("user_data.userid"))
    comment_id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)

    commenter = relationship("UserTable", foreign_keys=commenter_id)


