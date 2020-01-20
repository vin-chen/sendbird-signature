from __future__ import unicode_literals
import hashlib, hmac

api_token = b'0a9c1297db403d32b76763c496dc0f54b22680a7'   # Convert a string of your API token to a bytes object
webhook_payload = '{"category":"group_channel:create","created_at":1578972803,"inviter":{"nickname":"admin","user_id":"150590c940b17f8b77d2b7b1cd25b165f3012501","profile_url":"","metadata":{"role":"agent"}},"app_id":"05CE0F08-9BFC-42BB-AF65-95E42C188990","channel":{"is_super":false,"is_distinct":false,"name":"Group Channel","custom_type":"","is_ephemeral":false,"data":"","channel_url":"sendbird_group_channel_190395511_159878a38bf645fddf59cbc64bfc463afbc2b976","is_discoverable":false,"is_public":false}}'

signature_to_compare = hmac.new(
    key=api_token,
    msg=bytes(webhook_payload.encode('utf8')),
    digestmod=hashlib.sha256).hexdigest()

print "hash: ", signature_to_compare
