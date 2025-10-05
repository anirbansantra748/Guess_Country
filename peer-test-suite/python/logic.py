def get_user_age(user):
    # missing None checks; assume user has 'age'
    return 2025 - user['birth_year']
