import pandas as pd
import numpy as np

print("Loading the Data")
data_load = "combined_stats.csv"
data_df = pd.read_csv(data_load)
#gl.info(memory_usage='deep')

#for dtype in ['float','int','object']:
#    selected_dtype = data_df.select_dtypes(include=[dtype])
#    mean_usage_b = selected_dtype.memory_usage(deep=True).mean()
#    mean_usage_mb = mean_usage_b / 1024 ** 2
#    print("Average memory usage for {} columns: {:03.2f} MB".format(dtype,mean_usage_mb))



# We're going to be calculating memory usage a lot,
# so we'll create a function to save us some time!

def mem_usage(pandas_obj):
    if isinstance(pandas_obj,pd.DataFrame):
        usage_b = pandas_obj.memory_usage(deep=True).sum()
    else: # we assume if not a df it's a series
        usage_b = pandas_obj.memory_usage(deep=True)
    usage_mb = usage_b / 1024 ** 2 # convert bytes to megabytes
    return "{:03.2f} MB".format(usage_mb)

data_int = data_df.select_dtypes(include=['int'])
converted_int = data_int.apply(pd.to_numeric,downcast='unsigned')

#print(mem_usage(data_int))
#print(mem_usage(converted_int))

#compare_ints = pd.concat([data_int.dtypes,converted_int.dtypes],axis=1)
#compare_ints.columns = ['before','after']
#compare_ints.apply(pd.Series.value_counts)


data_float = data_df.select_dtypes(include=['float'])
converted_float = data_float.apply(pd.to_numeric,downcast='float')

#print(mem_usage(data_float))
#print(mem_usage(converted_float))

#compare_floats = pd.concat([data_float.dtypes,converted_float.dtypes],axis=1)
#compare_floats.columns = ['before','after']
#compare_floats.apply(pd.Series.value_counts)

optimized_data = data_df.copy()

optimized_data[converted_int.columns] = converted_int
optimized_data[converted_float.columns] = converted_float

print(f"Total Data Usage on the original dataFrame :{mem_usage(data_df)}")
#print(mem_usage(optimized_data))


data_obj = data_df.select_dtypes(include=['object']).copy()


converted_obj = pd.DataFrame()

for col in data_obj.columns:
    num_unique_values = len(data_obj[col].unique())
    num_total_values = len(data_obj[col])
    if num_unique_values / num_total_values < 0.5:
        converted_obj.loc[:,col] = data_obj[col].astype('category')
    else:
        converted_obj.loc[:,col] = data_obj[col]

#print("Object type columns data usage")
#print(mem_usage(data_obj))
#print("Optimized object type columns data usage")
#print(mem_usage(converted_obj))

#compare_obj = pd.concat([data_obj.dtypes,converted_obj.dtypes],axis=1)
#compare_obj.columns = ['before','after']
#compare_obj.apply(pd.Series.value_counts)        

optimized_data[converted_obj.columns] = converted_obj

mem_usage(optimized_data)
dtypes = optimized_data.dtypes
dtypes_col = dtypes.index
dtypes_type = [i.name for i in dtypes.values]

column_types = dict(zip(dtypes_col, dtypes_type))

# rather than print all 161 items, we'll
# sample 10 key/value pairs from the dict
# and print it nicely using prettyprint

#preview = first2pairs = {key:value for key,value in list(column_types.items())[:]}
#import pprint
#pp = pp = pprint.PrettyPrinter(indent=4)
#pp.pprint(preview)



optimized_df = pd.read_csv('combined_stats.csv',dtype=column_types)

print(f"New dataFrame memory usage :{mem_usage(optimized_df)}")

