from django.contrib import admin
from .models import User, Purchase


class PurchaseAdmin(admin.ModelAdmin):
    list_display = ('user', 'total', 'status')
    list_filter = ('status',)
    search_fields = ('user__username', 'total')
    ordering = ('-total',)
    list_editable = ('status',)  # Permite editar el status directamente en la lista


admin.site.register(User)
admin.site.register(Purchase)
