import pygame as pg
import sys, os
import pelota
import random

class Game:
    FPS = 240
    def __init__(self):

        self.pantalla = pg.display.set_mode((800, 600))
        pg.display.set_caption("Futuro Arkanoid")
        self.pelota = pelota.Pelota(400, 300, 1, 1, (251, 202, 239), 25, 25)
        self.palito = pelota.Palito(360, 550, 5, 5, (255, 255, 255), 80, 25)
        self.clock = pg.time.Clock()
        self.lista_obj = [self.pelota, self.palito]
        
    def bucle_principal(self):
        game_over = False
        while not game_over:
            self.clock.tick(self.FPS) 
            self.__eventos()
            self.pelota.update()
            self.pantalla.fill((0,0,0))
            for obj in self.lista_obj:
                self.pantalla.blit(obj.imagen, (obj.x,obj.y))
            self.palito.moving_stick()
            pg.display.flip()

    def __eventos(self):
        for event in pg.event.get(): 
            if event.type == pg.QUIT:
                pg.quit()
                sys.exit()
            if event.type == pg.KEYDOWN:
                if event.key == pg.K_RIGHT:
                    self.palito.moving_right = True
                if event.key == pg.K_LEFT:
                    self.palito.moving_left = True
            if event.type == pg.KEYUP:
                if event.key == pg.K_RIGHT:
                    self.palito.moving_right = False
                if event.key == pg.K_LEFT:
                    self.palito.moving_left = False

if __name__ == "__main__":
    pg.init()
    game = Game()
    game.bucle_principal()