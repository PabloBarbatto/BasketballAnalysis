import pandas as pd



data_load = "test.csv"
data_df = pd.read_csv(data_load)
print(data_df.head())

data_df.to_csv("Clean_Data.csv")