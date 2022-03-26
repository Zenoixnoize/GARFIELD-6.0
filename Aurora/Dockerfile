FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Zenoixnoize/GARFIELD-6.0.git /root/GARFIELD-6.0
WORKDIR /root/GARFIELD-6.0/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
