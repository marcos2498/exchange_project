from django.apps import AppConfig


class DataConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'data'
# used for special app configurations which I did not end up using. I could probably delete this
