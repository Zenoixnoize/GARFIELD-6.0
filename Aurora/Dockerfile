FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Zenoixnoize/GARFIELD-6.0 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
