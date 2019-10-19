import pandas as pd
import seaborn as s
from sklearn.neighbors import KNeighborsRegressor as k

if __name__ == '__main__':
    train = pd.read_csv("data/equip_failures_training_set.csv", na_values='na')

    train.fillna(0, inplace=True)


    g = s.pairplot(train,
               x_vars=["sensor1_measure", "sensor3_measure"],
               y_vars=["sensor1_measure", "sensor3_measure"],
               hue='target')
    # s.pairplot(train,
    #            vars=["sensor1_measure", "sensor3_measure"],
    #            hue='target')

    knn = k()
    knn.fit(X = train.loc[2:], y = train.loc[1])