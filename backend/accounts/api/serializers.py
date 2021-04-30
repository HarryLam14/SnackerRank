from rest_framework import serializers

from account.models import Account

class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.PasswordField(write_only=True)

    class Meta:
        model = Account
        fields = ['email', 'username', 'password', 'password2',]
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def save(self):
        account = Account(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
        )
        