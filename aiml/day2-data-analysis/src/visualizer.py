import matplotlib.pyplot as plt
import pandas as pd

def plot_hours_vs_marks(df: pd.DataFrame) -> None:
    plt.scatter(df["Hours_Studied"], df["Marks"])
    plt.xlabel("Hours Studied")
    plt.ylabel("Marks")
    plt.title("Hours vs Marks")
    plt.show()