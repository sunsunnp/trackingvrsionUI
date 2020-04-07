<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :data="table1.data" :columns="table1.columns"></paper-table>
        </div>
      </card>
    </div>
    <!-- display none use d-none -->
	<div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                         :columns="table2.columns">

            </paper-table>
          </div>
        </card>
      </div>
  </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ["Id", "Product"];
const tableData = [
  {
    id: 1,
    product: "PAM"
  },
  {
    id: 2,
    product: "Product name"
  },
  {
    id: 3,
    product: "Product name"
  },
  {
    id: 4,
    product: "Product name"
  },
  {
    id: 5,
    product: "Product name"
  }
];

const tableCol = ["Id", "Product", "Branch"];
const tableDa = [
  {
    id: 1,
    product: "PAM",
    branch: "Major"
  },
  {
    id: 2,
    product: "PAM",
    branch: "Naraya"
  },
  {
    id: 3,
    product: "PAM",
    branch: "MTL"
  },
  {
    id: 4,
    product: "Product name",
    branch: "Branch name"
  },
  {
    id: 5,
    product: "Product name",
    branch: "Branch name"
  }
];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "All product",
        subTitle: "All product @ sunsun np",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableCol],
        data: [...tableDa]
      }
    };
  }
};
</script>
<style>
</style>
