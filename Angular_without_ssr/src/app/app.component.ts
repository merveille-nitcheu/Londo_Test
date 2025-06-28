import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrandService } from './brand.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  brands: any[] = [];
    currentPage = 1;
    itemsPerPage = 10;
    searchQuery = '';

    constructor(private brandService: BrandService) {

    }

    newBrand = {
    brand_name: '',
    description: ''
  };

    ngOnInit(): void {
      this.loadBrands();
    }

    loadBrands(): void {
      this.brandService.getAllBrands().subscribe((data) => {
        this.brands = data;
      });
    }

    gotoNestsjs() {
  window.location.href = '/nestjs';
}

    get paginatedBrands(): any[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredBrands.slice(start, start + this.itemsPerPage);
    }

    get filteredBrands(): any[] {
      return this.brands.filter(brand =>
        brand.brand_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    changePage(page: number): void {
      this.currentPage = page;
    }

    totalPages(): number {
      return Math.ceil(this.filteredBrands.length / this.itemsPerPage);
    }

    submitBrand(): void {
      console.log('hello')
      const formData = new FormData();
    formData.append('brand_name', this.newBrand.brand_name);
    formData.append('description', this.newBrand.description);
    console.log(formData);
      this.brandService.storeBrand(formData).subscribe(() => {
        this.loadBrands();
        this.newBrand = { brand_name: '', description: '' };
      });
    }
}
