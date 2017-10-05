
import QSTK.qstkutil.qsdateutil as du
import numpy as np
import QSTK.qstkutil.tsutil as tsu
import QSTK.qstkutil.DataAccess as da
import datetime as dt
import matplotlib.pyplot as plt
import pandas as pd
import math
import copy
import QSTK.qstkstudy.EventProfiler as ep

def find_events(ls_symbols, d_data):
    ''' Finding the event dataframe '''
    df_close = d_data['actual_close']
    ts_market = df_close['SPY']

    print "Finding Events"

    # Creating an empty dataframe
    df_events = copy.deepcopy(df_close)
    df_events = df_events * np.NAN

    # Time stamps for the event range
    ldt_timestamps = df_close.index

    for s_sym in ls_symbols: # for each symbol
    for i in range(1, len(ldt_timestamps)): # for each day
        # Calculating the returns for this timestamp
        f_symprice_today = df_close[s_sym].ix[ldt_timestamps[i]]
        f_symprice_yest = df_close[s_sym].ix[ldt_timestamps[i - 1]]
        f_marketprice_today = ts_market.ix[ldt_timestamps[i]]
        f_marketprice_yest = ts_market.ix[ldt_timestamps[i - 1]]
        f_symreturn_today = (f_symprice_today / f_symprice_yest) - 1
        f_marketreturn_today = (f_marketprice_today / f_marketprice_yest) - 1

        # Event is found if the symbol is down more then 3% while the
        # market is up more then 2%
        if f_symreturn_today <= -0.03 and f_marketreturn_today >= 0.02:
             df_events[s_sym].ix[ldt_timestamps[i]] = 1

        return df_events
