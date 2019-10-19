import pandas as pd
import seaborn as s

if __name__ == '__main__':
    train = pd.read_csv("data/equip_failures_training_set.csv")
    train.replace('na', 0)
    print(train)

    s.pairplot(train,
               x_vars=["sensor1_measure", "sensor3_measure"],
               y_vars=["sensor1_measure", "sensor3_measure"],
               hue='target')


