/*Nataliia*/

<script>
export default {
  name: 'ListComponent',

  props: {
    title: String,
    items: Array,
    listTag: {
      type: String,
      default: 'ul'
    },
    variant: {
      type: String,
      default: 'default'   // "ingredients", "instructions" or "comments"
    }
  }
};
</script>

<template>
  <div :class="['list-component', variant]">
    <h2 v-if="title">{{ title }}</h2>

    <component :is="listTag" :class="['list-inner', variant]">
      <template v-for="(item, index) in items" :key="index">
        <slot name="item" :item="item" :index="index" /> <!--Custom item rendering via slot-->
      </template>
    </component>
  </div>
</template>

<style scoped>
.list-component {
  margin-bottom: 20px;
}

.list-component h2 {
  margin: 0 0 10px 0;
  font-weight: 600;
}

.list-inner {
  padding: 0;
  margin: 0;
}

.list-component.ingredients {
  background: #f5f0f8;
  padding: 14px 20px 18px;
  margin-top: 10px;
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(156, 156, 156, 0.5);
}

.list-inner.ingredients {
  list-style: none;
  padding: 0;
  margin: 0;
}

::v-deep(.list-inner.ingredients li) {
  padding: 14px 0;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

::v-deep(.list-inner.ingredients li:last-child) { /*Style <li> elements because component doesn't know it*/
  border-bottom: none;
}

.list-component.instructions {
  padding: 0;
  color: #444;
}

.list-component.instructions h2 {
  margin-bottom: 12px;
}

.list-inner.instructions {
  padding-top: 10px;
  padding-left: 15px;
  line-height: 1.8;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
}
</style>

