#!/bin/env/python3

# Convert the notebooks to basic html
jupyter nbconvert --to html src/*.ipynb --template basic --output-dir='./build'