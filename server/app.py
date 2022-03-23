from flask import Flask
from waitress import serve
import db
from datetime import datetime
from tqdm import tqdm
app = Flask(__name__)

#We're gonna use waitress to serve the app... eventually
cache = {}
@app.get('/')
def landing():
    """Landing page"""
    return "What's up?"

@app.get('/documentation')
def documentation():
    """Documentation"""
    return "WIP DOCS HERE"

@app.post('/callback/<id>')
def callback(id):
    """SSO Callback placeholder"""
    return id

@app.post('/feedback')
def post_feedback():
    """Send Feedback"""
    return "WIP FEEDBACK HERE"

@app.get('/feedback')
def get_feedback():
    """Get Feedback"""
    return "WIP FEEDBACK HERE"

@app.get('/stop/<data>')
def get_stop(data):
    # Init our timer
    timer = datetime.now()
    """Returns specific stop summary"""
    out = {}
    try:
        row = db.session.query(db.StopSummary).where(db.StopSummary.stop == data).first()
    except Exception:
        return "Query Error"
    out[row.stop] = {"on":row.on,"off":row.off,"off_average":row.off_average,"on_average":row.on_average,"stops":(int(row.on_count) + int(row.off_count))}
    print(datetime.now() - timer)
    return out

@app.get('/stop/search/<data>')
def search_stop(data):
    """Searches for stop summaries"""
    # Init our timer
    timer = datetime.now()
    out = {}
    try:
        result = db.session.query(db.StopSummary).filter(db.StopSummary.stop.ilike("%" + data + "%"))
    except Exception:
        return "Query Error"
    for row in result:
        out[row.stop] = {"on": row.on, "off": row.off, "off_average": row.off_average, "on_average": row.on_average,
                         "stops": (int(row.on_count) + int(row.off_count))}
    print(datetime.now() - timer)
    return out


@app.get('/stop')
def get_all_stops():
    """Returns all stop summaries"""
    #Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopSummary).all()
    for row in result:
        out[row.stop] ={"on":row.on,
                        "off":row.off,
                        "off_average":row.off_average,
                        "on_average":row.on_average,
                        "stops":(int(row.on_count) + int(row.off_count))}
    print(datetime.now() - timer)
    return out

@app.get('/points')
def get_all_points():
    """Returns all points, don't use this unless you MUST"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).all()
    for row in result:
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out

@app.get('/points/stop/<data>')
def get_points_by_stop(data):
    """Returns specific set of points by stop"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.StopPoint.stop == data)
    for row in result:
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out

@app.get('/points/bus/<data>')
def get_points_by_bus(data):
    """Returns specific set of points by bus"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.StopPoint.bus == data)
    for row in result:
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out

@app.get('/points/route/<data>')
def get_points_by_route(data):
    """Returns specific set of points by route"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.StopPoint.route == data)
    for row in result:
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out

@app.get('/points/year/<data>')
def get_points_by_year(data):
    """Returns specific set of points by route"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.extract('year',db.StopPoint.date_time)==data)
    for row in tqdm(result):
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out

@app.get('/points/month/<data>')
def get_points_by_month(data):
    """Returns specific set of points by route"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.extract('month',db.StopPoint.date_time)==data)
    for row in result:
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out
@app.get('/points/hour/<data>')
def get_points_by_hour(data):
    """Returns specific set of points by route"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.extract('hour',db.StopPoint.date_time)==data)
    for row in result:
        out[str(row.date_time) +"," + str(row.bus) +"," +row.onoff] ={"datetime":row.date_time,
                                                 "bus":row.bus,
                                                 "route":row.route,
                                                 "lat":row.lat,
                                                 "long":row.long}
    print(datetime.now() - timer)
    return out

@app.get('/points/year/<year>/month/<month>')
def get_points_by_year_and_month(year,month):
    """Returns specific set of points by route"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.and_(db.extract('year',db.StopPoint.date_time)==year, db.extract('month',db.StopPoint.date_time)==month))
    for row in result:
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out

@app.get('/lines')
def get_lines():
    """Returns all lines"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.RouteSummary).all()
    for row in result:
        out[row.route] ={"people":row.on,"stops":row.on_count}
    print(datetime.now() - timer)
    return out

@app.get('/line/name/<name>')
def get_line_by_name(name):
    """Returns specific line"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.RouteSummary).where(db.RouteSummary.route == name)
    for row in result:
        out[row.route] ={"people":row.on,"stops":row.on_count}
    print(datetime.now() - timer)
    return out

@app.get('/line/riders/<riders>')
def get_line_by_riders(riders):
    """Returns specific line"""
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.RouteSummary).where(db.RouteSummary.on > riders)
    for row in result:
        out[row.route] ={"people":row.on,"stops":row.on_count}
    print(datetime.now() - timer)
    return out

if __name__ == '__main__':
    #--host 0.0.0.0 --port 5000
    serve(app,host='0.0.0.0', port=5000)
