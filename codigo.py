#passo a passo do projeto

import pyautogui 
import time

pyautogui.PAUSE = 1

#minimizar vs
pyautogui.click(x=1806, y=15)
time.sleep (1.5)

#abrir cliente riot 
pyautogui.press("win")
pyautogui.write("cliente riot")
pyautogui.press("enter")
time.sleep (5)


#fazer login 
pyautogui.click(x=299, y=372)
pyautogui.write("tecatuco")

#senha
pyautogui.press("tab")
pyautogui.write("0neurose0")
time.sleep(1)

#logar
pyautogui.click(x=392, y=778)
time.sleep(5)

#selecionar valorant
pyautogui.click(x=437, y=454)
time.sleep(3)

#play 
pyautogui.click(x=351, y=409)

