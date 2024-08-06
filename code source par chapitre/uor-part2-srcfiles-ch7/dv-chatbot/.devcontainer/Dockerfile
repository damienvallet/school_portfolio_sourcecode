# On utilise l'image python:3.8 comme base
FROM python:3.8

# On définit le répertoire de travail comme /workspace
WORKDIR /workspace

# on met à jour les paquets et on installe les paquets nécessaires
# on installe build-essential 
# on supprime les fichiers temporaires pour réduire la taille de l'image
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# On copie le fichier requirements.txt dans le répertoire de travail
COPY requirements.txt /workspace/

# On installe les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# On copie le contenu du répertoire courant dans le répertoire de travail
COPY . /workspace/