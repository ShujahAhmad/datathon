import pandas as pd
import seaborn as s
import numpy as np

if __name__ == '__main__':
    df = pd.read_csv("data/equip_failures_training_set.csv", na_values='na')

    df.fillna(0, inplace=True)

    msk = np.random.rand(len(df)) < 0.8

    train = df[msk]

    test = df[~msk]


    g = s.pairplot(train,
               x_vars=["sensor1_measure", "sensor3_measure"],
               y_vars=["sensor1_measure", "sensor3_measure"],
               hue='target')
    # s.pairplot(train,
    #            vars=["sensor1_measure", "sensor3_measure"],
    #            hue='target')

