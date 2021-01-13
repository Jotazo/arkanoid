from entidades import Figura

class Pelota(Figura):

    def __init__(self, x, y, vx, vy, color, anchura, altura):
        super().__init__(x, y, vx, vy, color, anchura, altura)

class Palito(Figura):

    def __init__(self, x, y, vx, vy, color, anchura, altura):
        super().__init__(x, y, vx, vy, color, anchura, altura)

        self.moving_right = False
        self.moving_left = False

    def moving_stick(self):
        if self.moving_right and self.rect.right < 800:
            self.x += self.vx
        if self.moving_left and self.rect.left > 0:
            self.x -= self.vx