import csv
from tqdm import tqdm
import pickle
import os
real_database = {}

if not os.path.exists("db.kat"):
    print("Totally Real DB doesn't exist, loading fresh")
    with open("Resources/data_pt1.csv",newline = '') as data_csv:
        reader = csv.reader(data_csv)
        for item in tqdm(reader):
            real_database[item[0]+"-"+item[1]+"-"+str(item[2])] = item
    with open("db.kat","wb") as handle:
        pickle.dump(real_database,handle,protocol=pickle.HIGHEST_PROTOCOL)
else:
    print("Totally Real DB exists, poggers")
    with open("db.kat","rb") as handle:
        real_database = pickle.load(handle)

