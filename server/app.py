from flask import Flask
from waitress import serve
import db
from datetime import datetime
from tqdm import tqdm
from flask_caching import Cache

cache = Cache(config={'CACHE_TYPE': 'SimpleCache'})

CACHE_TIMEOUT = 60

CACHING_DISABLED = False
app = Flask(__name__)
cache.init_app(app)
# We're gonna use waitress to serve the app... eventually


@app.get('/')
@cache.cached(timeout=CACHE_TIMEOUT,unless=CACHING_DISABLED)
def landing():
    """Landing page"""
    return "Landing Page"


@app.get('/disable_caching/<disable>')
def disable_caching(disable):
    """
    It takes a string as an argument, and if the string is "true", it sets the global variable CACHING_DISABLED to True, and
    if the string is "false", it sets the global variable CACHING_DISABLED to False

    :param disable: a string that is either "true" or "false"
    :return: the string "Caching Disabled" or "Caching Enabled"
    """

    if disable.lower() == "true":
        CACHING_DISABLED = True
        return "Caching Disabled"
    elif disable.lower() == "false":
        CACHING_DISABLED = False
        return "Caching Enabled"
    else:
        return "supply True or False to change caching status"


@app.get('/documentation')
@cache.cached(timeout=CACHE_TIMEOUT, unless=CACHING_DISABLED)
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
@cache.cached(timeout=CACHE_TIMEOUT,unless=CACHING_DISABLED)
def get_stop(data):
    """
    It takes a stop number, queries the database for the stop summary, and returns a dictionary with the stop number as the
    key and the stop summary as the value

    :param data: The stop number
    :return: A dictionary with the stop number as the key and a dictionary of the stop summary as the value.
    """

    # Init our timer
    timer = datetime.now()

    out = {}
    try:
        row = db.session.query(db.StopSummary).where(db.StopSummary.stop == data).first()
    except Exception:
        return "Query Error"
    out[row.stop] = {"on": row.on, "off": row.off, "off_average": row.off_average, "on_average": row.on_average,
                     "stops": (int(row.on_count) + int(row.off_count))}
    print(datetime.now() - timer)
    return out


@app.get('/stop/search/<data>')
@cache.cached(timeout=CACHE_TIMEOUT,unless=CACHING_DISABLED)
def search_stop(data):
    """
    It takes a string, searches the database for all stops that contain that string, and returns a dictionary of all the
    stops that contain that string

    :param data: The search term
    :return: A dictionary of stop summaries
    """

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
@cache.cached(timeout=CACHE_TIMEOUT)
def get_all_stops():
    """
    > It returns a dictionary of all the stop summaries
    :return: A dictionary of all the stops in the database.
    """
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopSummary).all()
    for row in result:
        out[row.stop] = {"on": row.on,
                         "off": row.off,
                         "off_average": row.off_average,
                         "on_average": row.on_average,
                         "stops": (int(row.on_count) + int(row.off_count))}
    print(datetime.now() - timer)
    return out


@app.get('/points')
@cache.cached(timeout=CACHE_TIMEOUT)
def get_all_points():
    """
    > This function returns all points in the database, don't use this unless you MUST
    :return: A dictionary of dictionaries.
    """
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
    """
    It takes a stop number, and returns a dictionary of all the points for that stop

    :param data: The stop number
    :return: A dictionary of dictionaries.
    """
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
    """
    It takes a bus number as input, and returns a dictionary of all the points for that bus

    :param data: The bus number you want to get the points for
    :return: A dictionary of dictionaries.
    """
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
    """
    It takes a route number, and returns a dictionary of all the points for that route

    :param data: The route number
    :return: A dictionary of dictionaries.
    """
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
    """
    > This function takes a year as an argument and returns a dictionary of all the stop points for that year

    :param data: The year you want to get the data for
    :return: A dictionary of dictionaries.
    """
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.extract('year', db.StopPoint.date_time) == data)
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
    """
    It takes a month as an argument, and returns a dictionary of all the stop points for that month

    :param data: The month you want to get the data for
    :return: A dictionary of dictionaries.
    """
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.extract('month', db.StopPoint.date_time) == data)
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
    """
    It takes a number (0-23) and returns a dictionary of all the stop points that occurred during that hour

    :param data: the hour you want to get the data for
    :return: A dictionary of dictionaries.
    """

    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.extract('hour', db.StopPoint.date_time) == data)
    for row in result:
        out[str(row.date_time) + "," + str(row.bus) + "," + row.onoff] = {"datetime": row.date_time,
                                                                          "bus": row.bus,
                                                                          "route": row.route,
                                                                          "lat": row.lat,
                                                                          "long": row.long}
    print(datetime.now() - timer)
    return out


@app.get('/points/year/<year>/month/<month>')
def get_points_by_year_and_month(year, month):
    """
    > This function returns a dictionary of points for a specific year and month

    :param year: The year you want to get points for
    :param month: The month you want to get data for
    :return: A dictionary of dictionaries.
    """
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.and_(db.extract('year', db.StopPoint.date_time) == year,
                                                          db.extract('month', db.StopPoint.date_time) == month))
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
    """
    It gets all the lines and their data from the database
    :return: A dictionary of dictionaries.
    """
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.RouteSummary).all()
    for row in result:
        out[row.route] = {"people": row.on, "stops": row.on_count, "peak_hour": row.peak_hour}
    print(datetime.now() - timer)
    return out


@app.get('/line/name/<name>')
def get_line_by_name(name):
    """
    > This function takes a route name and returns a dictionary of the number of people on the route and the number of stops
    on the route

    :param name: The name of the line you want to get data for
    :return: A dictionary with the route name as the key and a dictionary with the number of people on the route and the
    number of stops on the route as the value.
    """
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.RouteSummary).where(db.RouteSummary.route == name)
    for row in result:
        out[row.route] = {"people": row.on, "stops": row.on_count}
    print(datetime.now() - timer)
    return out


@app.get('/line/riders/<riders>')
def get_line_by_riders(riders):
    """
    This function takes in a number of riders and returns a dictionary of routes and the number of people on that route
    only routes with more than that number of riders will be returned

    :param riders: The number of riders on the bus
    :return: A dictionary of routes and the number of people on the route and the number of stops on the route.
    """
    # Init our timer
    timer = datetime.now()
    out = {}
    result = db.session.query(db.RouteSummary).where(db.RouteSummary.on > riders)
    for row in result:
        out[row.route] = {"people": row.on, "stops": row.on_count}
    print(datetime.now() - timer)
    return out

@app.get('/stops/month/<month>')
def get_stop_by_month(month):
    timer = datetime.now()
    out = {}
    result = db.session.query(db.StopPoint).where(db.extract('month', db.StopPoint.date_time) == month)
    for row in result:
        if not row.stop == "":
            out[row.stop] = out.get(row.stop,0) + row.count
    print(datetime.now() - timer)
    return out


if __name__ == '__main__':
    # --host 0.0.0.0 --port 5000
    serve(app, host='0.0.0.0', port=5000)
