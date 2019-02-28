import pandas as pd
import numpy as np
#from CompleteDataCleanUp import optimized_df 


column_types = {   'a1': 'category',
    'a2': 'category',
    'a3': 'category',
    'a4': 'category',
    'a5': 'category',
    'assist': 'category',
    'away': 'category',
    'away_score': 'int64',
    'block': 'category',
    'converted_x': 'category',
    'converted_y': 'category',
    'data_set': 'category',
    'date': 'category',
    'description': 'category',
    'elapsed': 'category',
    'entered': 'category',
    'event_type': 'category',
    'game_id': 'int64',
    'h1': 'category',
    'h2': 'category',
    'h3': 'category',
    'h4': 'category',
    'h5': 'category',
    'home': 'category',
    'home_score': 'int64',
    'left': 'category',
    'num': 'float32',
    'opponent': 'category',
    'original_x': 'category',
    'original_y': 'category',
    'outof': 'float32',
    'period': 'int64',
    'play_id': 'int64',
    'play_length': 'category',
    'player': 'category',
    'points': 'float32',
    'possession': 'category',
    'reason': 'category',
    'remaining_time': 'category',
    'result': 'category',
    'shot_distance': 'category',
    'steal': 'category',
    'team': 'category',
    'type': 'category'}

optimized_df = pd.read_csv('combined_stats.csv',dtype=column_types)


def mem_usage(pandas_obj):
    if isinstance(pandas_obj,pd.DataFrame):
        usage_b = pandas_obj.memory_usage(deep=True).sum()
    else: # we assume if not a df it's a series
        usage_b = pandas_obj.memory_usage(deep=True)
    usage_mb = usage_b / 1024 ** 2 # convert bytes to megabytes
    return "{:03.2f} MB".format(usage_mb)


print(f"Total Memory Usage on the new dataFrame :{mem_usage(optimized_df)}")


player_df = pd.read_csv('player_id.csv')
print(player_df.head(10))
