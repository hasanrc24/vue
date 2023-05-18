<script>
import Konva from 'konva'

export default {
  data() {
    return {
      dragging: false,

      configKonva: {
        width: 600,
        height: 500
      },
      configCircle: {
        x: 60,
        y: 60,
        radius: 30,
        fill: 'lightblue',
        draggable: false,
        stroke: 'blue',
        strokeWidth: 2
      },
      configRect: {
        x: 30,
        y: 120,
        width: 100,
        height: 50,
        draggable: true,
        fill: this.dragging ? 'green' : 'blue',
        stroke: 'black',
        strokeWidth: 2
      }
    }
  },
  methods: {
    // New rectangle
    handleNewRect() {
      const stage = this.$refs.stage.getStage()
      const layer = new Konva.Layer()

      const newRect = new Konva.Rect({
        x: 150,
        y: 150,
        width: 100,
        height: 50,
        draggable: true,
        fill: 'red'
      })

      const transformer = new Konva.Transformer()
      layer.add(transformer)

      newRect.on('click', () => {
        layer.add(transformer) // Move the transformer to the top
        transformer.attachTo(newRect) // Attach the transformer to the rectangle
        layer.batchDraw() // Redraw the layer to show the transformer
      })

      stage.on('click', (e) => {
        console.log(newRect)
        if (!newRect.isDragging()) {
          const clickedOnEmpty = e.target === stage
          if (clickedOnEmpty) {
            transformer.detach() // Detach the transformer from the rectangle
            layer.draw() // Redraw the layer to remove the transformer
          }
        }
      })

      layer.add(newRect)
      stage.add(layer)
    },

    // New Circle
    handleNewCircle() {
      const stage = this.$refs.stage.getStage()
      const layer = new Konva.Layer()

      const newCircle = new Konva.Circle({
        x: 150,
        y: 150,
        draggable: true,
        radius: 30,
        fill: 'lightblue',
        stroke: 'blue',
        strokeWidth: 2
      })

      layer.add(newCircle)
      stage.add(layer)
    }
  }
}
</script>

<template>
  <div class="the-canvas">
    <div class="left-panel">
      <p>Pick any item from here</p>
      <v-stage :config="configKonva" ref="stage">
        <!-- Circle -->
        <v-layer ref="layer">
          <v-circle @click="handleNewCircle" :config="configCircle"></v-circle>

          <!-- Rectangle -->
          <v-rect @click="handleNewRect" :config="configRect"></v-rect>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<style scoped>
.konva-body {
  border: 1px solid blud;
}
.the-canvas {
  display: flex;
  gap: 1rem;
}
.left-panel {
  background-color: lightgrey;
}
.panel {
  border-right: 2px solid black;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
