/*Nataliia*/

<script>
export default {
  name: 'ListComponent',

  props: {
    title: String,
    items: Array,
    listTag: {
      type: String,
      default: 'ul',
      validator: function (value) {
        return ['ul', 'ol'].includes(value);
      }
    },
    variant: {
      type: String,
      default: 'ingredients',   // "ingredients", "instructions" or "comments"
      validator: function (value) {
        return ['ingredients', 'instructions'].includes(value);
      }
    }
  }
};
</script>

<template>
<div :class="['list-component', `list--${variant}`]">
  <h2 v-if="title">{{ title }}</h2>

  <component :is="listTag" class="list-inner">
    <template v-for="(item, index) in items" :key="item.id || index">
      <slot name="item" :item="item" :index="index" />
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

.list--ingredients {
  background: #f5f0f8;
  padding: 14px 20px 18px;
  margin-top: 10px;
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(156, 156, 156, 0.5);
}

.list--instructions {
  padding: 0;
  color: #333;
}

::v-deep(.instruction-item) {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 0;
  border-bottom: 1px solid #c7c7c7; /* divider */
}

::v-deep(.instruction-number) {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #bfbfbf;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-weight: 600;
  color: #333;

  flex-shrink: 0;
}

::v-deep(.instruction-text) {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  font-family: "Montserrat", sans-serif;
}

::v-deep(.instruction-item:last-child) {
  border-bottom: none;
}

/* To hide original checkbox */
::v-deep(.checkbox-wrapper input[type="checkbox"]) {
  opacity: 0;
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  width: 0;
  height: 0;
}

/* My round custom checkbox */
::v-deep(.custom-checkbox) {
  width: 28px;       
  height: 28px;
  border-radius: 50%;
  border: 1px solid #bfbfbf;
  display: inline-block;
  position: relative;
  transition: all 0.25s ease;
}

/* Horizontal line inside checkbox*/
::v-deep(.custom-checkbox::after) {
  content: "";
  width: 22px;
  height: 2px;
  background: rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(0);
  transition: 0.2s ease;
  border-radius: 2px;
}

/* checked */
::v-deep(input[type="checkbox"]:checked + .custom-checkbox) {
  background-color: #c69c6d;
  border-color: #c69c6d;
}

::v-deep(input[type="checkbox"]:checked + .custom-checkbox::after) { /* Show horizontal line when checked */
  transform: translate(-50%, -50%) scaleX(1);
}

</style>

