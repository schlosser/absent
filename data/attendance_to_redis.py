#!/usr/bin/env python

# This script should be placed on a crontab
# scheduled to run daily at 6 PM (after the
# 4 PM report goes up each day). It updates
# the current redis values to the most recent
# from the NYC Open Data SODA api.

import requests
import redis

def get_attd_as_json():
    """
    We can fetch the attendance 4PM report via the
    SODA api using the requests library, as the
    SODA api is REST-ful. The data updates every
    day, and includes previous data, so we only
    need to fetch this on a daily basis after 4
    in the afternoon.

    :return request response object
    """
    return requests.get('https://data.cityofnewyork.us/resource/uzy6-icxe.json')

if __name__ == '__main__':
    # connect to the Redis database
    # using the database with id 1
    conn = redis.Redis(db=1)

    # fetch the current data from the NYC
    # Open Data SODA api.
    resp = get_attd_as_json()
    if resp and resp.status_code == 200:
        # if we have an OK response we can drop the
        # extant database values

        # we do this in a transaction because
        # it maintains atomicity

        pipe = conn.pipeline()

        # drop all extant records, they are now
        # out of date because things change after
        # the initial posting of data
        pipe.flushdb()

        # insert all JSON objects from the API
        # as sequential keys -- they have
        # district/borough/number and date, but
        # we will need to traverse the table anyways
        # later
        for (i, v) in enumerate(resp.json()):
            pipe.set(i, v)

        pipe.execute()


