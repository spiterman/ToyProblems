
#Importing all the necessary libraries
# note to self, to import a file:
# >>> execfile("/Users/SergeyP/Desktop/project.py") 

import QSTK.qstkutil.qsdateutil as du

import numpy as np
import QSTK.qstkutil.tsutil as tsu
import QSTK.qstkutil.DataAccess as da
import datetime as dt
import matplotlib.pyplot as plt
import pandas as pd
import math

dt_start = dt.datetime(2011, 1, 1)
dt_end = dt.datetime(2011, 12, 31)
#equities = ["AAPL", "GLD", "GOOG", "XOM"]
#equities = ["AXP", "HPQ", "IBM", "HNZ"]
#equities = ['C', 'GS', 'IBM', 'HNZ'] 
#equities = ['BRCM', 'ADBE', 'AMD', 'ADI']
equities = ['AAPL', 'GOOG', 'IBM', 'MSFT']


def optimize(dt_start, dt_end, equities):

    dt_timeofday = dt.timedelta(hours=16)
    ldt_timestamps = du.getNYSEdays(dt_start, dt_end, dt_timeofday)

    c_dataobj = da.DataAccess('Yahoo', cachestalltime=0)
    ls_keys = ['open', 'high', 'low', 'close', 'volume', 'actual_close']

    ldf_data = c_dataobj.get_data(ldt_timestamps, equities, ls_keys)
    #this stores the data for the stocks in an object
    d_data = dict(zip (ls_keys, ldf_data))
    na_price = d_data['close'].values
    na_normalized_price = na_price/na_price[0,:]
    

    def simulate (proportions):
        ''' Returns the SD of daily returns, Avg Daily returns, Sharpe Ratio, Cumulative returns given stock allocations'''

        weighted_norm = np.copy(na_normalized_price)
        def make_weighted_array(prices, weights):
            i = 0
            j = 0
            while i < len(prices):
                while j < 4:
                    prices[i,j] = prices[i,j] * weights[j]
                    j = j + 1
                i = i + 1
                j = 0
            return prices
        port_val = np.sum(make_weighted_array(weighted_norm, proportions), axis = 1) 
        #the sum of the columns of the weighted norm

        daily_rets = tsu.returnize0(port_val)    #<<<<<THIS PART IS THE KEY
        #this is to get the daily returns how the instructor said to
        
        portfolio_cumulative_returns = cumulative_returns(na_normalized_price[len(na_normalized_price) - 1,:], proportions)
        #works
        portfolio_std = np.std(daily_rets)
        #works
        portfolio_average_returns = np.mean(daily_rets)
        #works
        portfolio_sharpe = math.sqrt(252) * portfolio_average_returns/portfolio_std
        #works
            

        
        return [portfolio_std, portfolio_average_returns, portfolio_sharpe, portfolio_cumulative_returns]

        
#Cumulative returns Helper

    def cumulative_returns(array, percentages):
        new_array = [0 , 0 , 0, 0]
        i = 0
        while i < 4:
            new_array[i] = percentages[i] * array[i]
            i = i + 1
        return np.sum(new_array)
            

    row = 0
    final_array = np.zeros((282,4))
    breakdown_array = np.zeros((282,4)) #this array is an index of the ratios of stocks

    for i in np.linspace(0,1,11):
        for j in np.linspace(0,1,11):
            for k in np.linspace(0,1,11):
                l = 1.0 - (k + j + i)
                if l <= 1 and l >= 0:
                    final_array[row,:] = simulate([i, j, k, l])
                    breakdown_array[row,:] = [i, j, k, l]
                    row = row + 1
    

    max_sharpe = max(final_array[:,2])
    
    
    def find_optimal_portfolio_assignments(sharpe):
        i = 0
                
        while i < 281:
            if sharpe == final_array[i, 2]:
                return breakdown_array[i, :]
            else:
                i = i + 1

    #print ldf_data
    
    return find_optimal_portfolio_assignments(max_sharpe)

    
    

