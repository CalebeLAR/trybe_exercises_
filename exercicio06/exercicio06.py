def valid_email(user_email: str):
    try:
        sections = user_email.split('@')
        user = sections[0]
        website = sections[1].split('.')[0]
        extension = sections[1].split('.')[1]

        if not user[0].isalpha():
            raise ValueError('Invalid user initial digit')

        for letter in user[1:]:
            p1 = letter.isalpha()
            p2 = letter.isdigit()
            p3 = letter.isnumeric()
            p4 = letter == '-' or letter == '_'
            valid = p1 or p2 or p3 or p4

            if not valid:
                raise ValueError('Invalid username')

        for letter in website:
            p1 = letter.isalpha()
            p2 = letter.isdigit()
            valid = p1 or p2

            if not valid:
                raise ValueError('Invalid website name')

        if len(extension) > 3:
            raise ValueError('Invalid extension')

    except IndexError:
        raise ValueError('Invalid format')


if __name__ == "__main__":
    valid_email('user@gmail.com')
