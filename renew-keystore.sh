#!bin/bash

# Create keystore
echo "Refreshing '~/ssl/mydomain.be.keystore'"
openssl pkcs12 -export \
         -in /etc/letsencrypt/live/nekohub.me/cert.pem \
         -inkey /etc/letsencrypt/live/nekohub.me/privkey.pem \
         -out /tmp/nekohub.me.p12 \
         -name nekohub.me \
         -CAfile /etc/letsencrypt/live/nekohub.me/fullchain.pem \
         -caname "Let's Encrypt Authority X3" \
         -password pass:Nekohub!

yes | keytool -importkeystore \
        -deststorepass Nekohub! \
        -destkeypass Nekohub! \
        -deststoretype pkcs12 \
        -srckeystore /tmp/nekohub.me.p12 \
        -srcstoretype PKCS12 \
        -srcstorepass Nekohub! \
        -destkeystore /tmp/nekohub.me.keystore \
        -alias nekohub.me
# Move certificates to other servers
echo "Copy '~/ssl/theirdomain.be.keystore' to cluster servers"
cp /tmp/nekohub.me.keystore /home/neko/neko_server/ssl/
echo "Done"
