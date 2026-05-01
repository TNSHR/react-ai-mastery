import pandas as pd

def basic_info(df: pd.DataFrame) -> None:
    print("\n====INFO====")
    print(df.info())

def statistics(df:pd.DataFrame)-> None:
    print("\n====STATISTICS====")
    print(df.describe())

def missing_values(df:pd.DataFrame)-> None:
    print("\n====MISSING VALUES====")
    print(df.isnull().sum())

def correlation(df:pd.DataFrame)-> None:
    print("\n====CORRELATION====")
    print(df.corr(numeric_only=True))