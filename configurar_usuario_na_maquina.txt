echo OFF

echo --- Retirando Usuario GitHUB ----

git config --global --unset-all user.mail
git config --global --unset-all user.name

echo --- Configurando Usuario GitHUB ----

git config --global user.name "Davi Vilar"
git config --global user.email davivilar@gmail.com
echo --- Mostrando a configuração atual do Github no computador
git config --list

echo - download da pasta da Aula - PW

echo git clone https://github.com/davivilar/pwi-davi.vilar2025.git

echo --- Fim ---
echo --- Joao Lindo  Saudades ---

pause