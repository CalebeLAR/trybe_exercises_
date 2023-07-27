import pytest
from exercicio06 import valid_email


def test_validates_email_format():
    'Should follow the format username@websitename.extension'
    with pytest.raises(Exception, match='Invalid format'):
        valid_email('@gmail.com')
        valid_email('usergmail.com')
        valid_email('user@.com')
        valid_email('user@gmailcom')
        valid_email('user@gmail.')


def test_validates_user_name_starts_with_letter():
    'The user name must start with a letter'
    with pytest.raises(Exception, match='Invalid user initial digit'):
        valid_email('0user@gmail.com')
        valid_email('_user@gmail.com')


def test_validates_user_name():
    'The user name must contain only letters, digits, dashes, and underscores'
    with pytest.raises(Exception, match='Invalid username'):
        valid_email('user @gmail.com')


def test_validates_website_format():
    'The website name must contain only letters and digits'
    with pytest.raises(Exception, match='Invalid website name'):
        valid_email('user@0mail.com')
        valid_email('user@_mail.com')


def test_validates_extension():
    'The maximum extension length is 3 characters'
    with pytest.raises(Exception, match='Invalid extension'):
        valid_email('user@0mail.comm')
