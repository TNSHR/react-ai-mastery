import os
from loader import load_data
from analyzer import basic_info, statistics, missing_values, correlation
from visualizer import plot_hours_vs_marks

def main():
    base_dir = os.path.dirname(__file__)
    data_path = os.path.join(base_dir, "../data/students.csv")

    df = load_data(data_path)

    print("===== PREVIEW =====")
    print(df.head())

    basic_info(df)
    statistics(df)
    missing_values(df)
    correlation(df)

    plot_hours_vs_marks(df)

if __name__ == "__main__":
    main()