import pygame as pg

class Figura():

    def __init__(self, x, y, vx, vy, color, anchura, altura):
        self.x = x
        self.y = y
        self.vx = vx
        self.vy = vy
        self.color = color
        self.anchura = anchura
        self.altura = altura

        self.imagen = pg.Surface((self.anchura, self.altura))
        self.imagen.fill(self.color)

    @property
    def rect(self):
        return pg.Rect(self.x, self.y, self.anchura, self.altura)

    def update(self):
        if self.rect.left <= 0 or self.rect.right >= 800:
            self.vx = -self.vx
        if self.rect.top <= 0 or self.rect.bottom >= 600:
            self.vy = -self.vy

        self.x += self.vx
        self.y += self.vy