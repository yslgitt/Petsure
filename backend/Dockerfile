FROM python:3.9.7
WORKDIR /var/jenkins_home/workspace/petsure/backend
COPY requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . .
CMD ["gunicorn", "petsure.wsgi", "--bind", "0.0.0.0:8080"]
# CMD ["python", "manage.py", "runserver"]