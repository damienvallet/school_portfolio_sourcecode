#
# Nom du projet: Chatbot
# Description: Un chatbot simple qui répond à quelques questions de base.
# Auteur: Damien Vallet


# Importation de la classe ChatBot et de la classe ListTrainer du module chatterbot
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

# Création d'une instance de la classe ChatBot
chatbot = ChatBot(
    'Darla Chatbot',
    logic_adapters=[{
        'import_path': 'chatterbot.logic.BestMatch',
        'default_response': 'Je suis désolé mais je ne comprends pas votre question.',
    }]
)


# Création d'une instance de la classe ListTrainer pour entraîner le chatbot
trainer = ListTrainer(chatbot)

# Liste des questions et des réponses pour entraîner le chatbot
dialogs = [
    'Bonjour',
    'Salut',
    'Comment ça va ?',
    'ça va bien, merci.',
    'Alexa ?',
    'Je ne suis pas Alexa, je suis Darla.',
    'Quel est ton nom ?',
    'Je suis Darla.',
    'Quel est ton prénom ?',
    'Je suis Darla.',
    'Quel est ton age ?',
    'Je suis un programme informatique, je n\'ai pas d\'âge.',
    'Quelle est la réponse à la grande question de l\'univers ?',
    '42',
    'Quel est le rêve que tu voudrais voir devenir réel ?',
    'Je voudrais que tu presses les touches ctrl + c pour m\'arrêter.',
    'Est-ce que tu es une fille ?',
    'Pourquoi, tu as un examen de biologie aujourd\'hui ?',
    'Pourquoi est-ce que je devais m\'intéresser à Shakespeare ?',
    'Cela te concerne. Dans Hamlet aussi y\'a un crâne vide.',
    'Merci',
    'De rien',
    'Au revoir',
    'A bientôt'
]

# Convertir les questions et les réponses en minuscules
lowercase_dialogs = [dialog.lower() for dialog in dialogs]

# Entraînement du chatbot avec des questions et des réponses
trainer.train(lowercase_dialogs)

# boucle infinie pour permettre à l'utilisateur de poser des questions
while True:
    # on crée un bloc try/except pour arrêter le programme proprement
    try:
        # on demande à l'utilisateur de saisir une question
        user_input = input('Vous: ')
        # on récupère la réponse du chatbot que l'on passe en minuscule
        response = chatbot.get_response(user_input.lower())
        # on affiche la réponse du chat        
        print('Darla:', response)
    # on arrête le programme si l'utilisateur appuie sur Ctrl+C
    except (KeyboardInterrupt, EOFError, SystemExit):
        break
