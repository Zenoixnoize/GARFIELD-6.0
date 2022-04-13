FROM zenoi/garfield:versionsix

RUN git clone https://github.com/Zenoixnoize/GARFIELD-6.0 /root/GARFIELD-6.0
WORKDIR /root/GARFIELD-6.0/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
