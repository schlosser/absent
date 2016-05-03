## Running the code:

Download Juypter, which is an ipython viewer.
If you have pip installed, use: `pip install juypter`.

The analysis code can be run by starting a jupyter notebook
instance in this directory, e.g.

```bash
jupyter notebook
```
You can then navigate to `analysis.ipnyb` and run the folders
by hitting `shift`+`enter` in each cell.

The file `attendance_to_redis` should be placed in a crontab,
scheduled to run daily at 6 PM. It can be run with 

```bash
python attendance_to_redis.py
```

To generate the Fusion Tables, we run the notebook file and
then upload the newly saved `joined.csv` to the Fusion Tables
site. Our current template is merged with the NYC zip code
geometry data set, so we can color polygons corresponding
to each zip code to generate the graphs seen in the report.
