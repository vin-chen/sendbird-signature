from __future__ import unicode_literals
import hashlib, hmac

api_token = b'my token'   # Convert a string of your API token to a bytes object
webhook_payload = 'my payload'

signature_to_compare = hmac.new(
    key=api_token,
    msg=bytes(webhook_payload.encode('utf8')),
    digestmod=hashlib.sha256).hexdigest()

print "hash: ", signature_to_compare
