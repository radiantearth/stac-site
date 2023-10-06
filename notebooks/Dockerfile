FROM python:3.8-slim

RUN apt-get update && apt-get install -y \
  wget \
  pandoc \
  rsync \
  && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /tmp/requirements.txt
RUN pip install --default-timeout=100 -r /tmp/requirements.txt

WORKDIR /opt/src/etl

ENTRYPOINT ["bash" ,"./build_notebooks.sh"]