from django_filters import rest_framework as filters

from studio.api.serializers import StudioSerializer
from studio.models import Studio
from django.db.models import Q

class StudioFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')
    working_days = filters.CharFilter(field_name='working_days', lookup_expr='icontains')
    min_price = filters.NumberFilter(field_name='price_per_day', lookup_expr='gte')
    max_price = filters.NumberFilter(field_name='price_per_day', lookup_expr='lte')
    min_start_time = filters.TimeFilter(field_name='start_time', lookup_expr='gte')
    max_start_time = filters.TimeFilter(field_name='start_time', lookup_expr='lte')
    min_end_time = filters.TimeFilter(field_name='end_time', lookup_expr='gte')    
    max_end_time = filters.TimeFilter(field_name='end_time', lookup_expr='lte')

    class Meta:
        model = Studio
        fields = ['name', 'working_days',
                  'price_per_day', 'start_time', 'end_time']

    # def filter_working_days(self, queryset, name, value):
    #     working_days = value.split(',')
    #     return queryset.filter(working_days__icontains=working_days)
    #     # `q_objects = Q()` is initializing an empty Q object. In Django, a Q object is used to
    #     # encapsulate a collection of keyword arguments in a single object that can be used to compose
    #     # complex database queries. By initializing `q_objects` as an empty Q object, we are preparing
    #     # it to store multiple Q objects that will be combined using logical operators like OR or AND
    #     # to build a more complex query filter.
    #     # `q_objects = Q()` is initializing an empty Q object. In Django, a Q object is used to
    #     # encapsulate a collection of keyword arguments in a single object that can be used as a
    #     # filter for database queries. By initializing `q_objects` as an empty Q object, we are
    #     # preparing it to store multiple filter conditions that will be combined using logical OR
    #     # operations to filter the queryset based on the working days provided in the
    #     # filter_working_days method.
    #     q_objects = Q()
    #     for day in working_days:
    #         q_objects |= Q(working_days__icontains=day)
    #     return queryset.filter(q_objects)
