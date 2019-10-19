import pandas as pd
import seaborn as s
import numpy as np
from sklearn.neighbors import KNeighborsRegressor as k
from sklearn.metrics import f1_score as f1

if __name__ == '__main__':
    df = pd.read_csv("data/equip_failures_training_set.csv", na_values='na')

    df.fillna(0, inplace=True)

    msk = np.random.rand(len(df)) < 0.8

    train = df[msk]

    test = df[~msk]

    # g = s.pairplot(train,
    #            x_vars=["sensor1_measure", "sensor3_measure"],
    #            y_vars=["sensor1_measure", "sensor3_measure"],
    #            hue='target')
    # s.pairplot(train,
    #            vars=["sensor1_measure", "sensor3_measure"],
    #            hue='target')

    knn = k()
    knn.fit(X = train.iloc[:, 2:], y = train.iloc[:, 1])

    result = knn.predict(test.iloc[:, 2:])
    for c in range(len(result)):
        if result[c] >= .5:
            result[c] = 1
        else:
            result[c] = 0
    err = f1(y_pred=result, y_true=test.iloc[:, 1])
    print(err)