import { Controller, Get, Post, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('transactions')
  getAllTransactions() {
    return this.adminService.getAllTransactions();
  }

  @Post('transactions/:id/reconcile')
  reconcileTransaction(@Param('id') id: string) {
    return this.adminService.reconcileTransaction(id);
  }
}
