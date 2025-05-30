from django.db import models
from .product_catalog import ProductCatalog
from .recipe import Recipe

class IsIngredient(models.Model):
    product = models.ForeignKey(ProductCatalog, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('product', 'recipe')

    def __str__(self):
        return f'{self.product.productName} in {self.recipe.recipeName}'
