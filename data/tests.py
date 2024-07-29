from django.test import TestCase
from .models import Commodity


class CommodityModelTests(TestCase):

    def setUp(self):
        # This method is used to set up any test data you need.
        Commodity.objects.create(name='Gold', description='Precious metal', price=1500.00, unit='ounce')

    def test_commodity_creation(self):
        # This method tests that a Commodity object is created properly.
        commodity = Commodity.objects.get(name='Gold')
        self.assertEqual(commodity.description, 'Precious metal')
        self.assertEqual(commodity.price, 1500.00)
        self.assertEqual(commodity.unit, 'ounce')

    def test_commodity_name(self):
        # Test to check the name field of Commodity.
        commodity = Commodity.objects.get(name='Gold')
        self.assertEqual(str(commodity.name), 'Gold')
