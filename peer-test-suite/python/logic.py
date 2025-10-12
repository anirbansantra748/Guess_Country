def get_user_age(user):
    # missing None checks; assume user has 'age'
# PEER-AUTOFIX start [findingId=undefined rule=magic-number analyzer=autofix ts=1760254111409]
#     return 2025 - user['birth_year']
    return 2025 - user['birth_year']
# PEER-AUTOFIX end [findingId=undefined]
