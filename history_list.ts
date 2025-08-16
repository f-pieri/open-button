  openSelected() {
    const selected = this.getSelectedEntries_();

    for (const entry of selected) {
      window.open(entry.url, '_blank');
    }
  }

  const toBeRemoved = this.getSelectedEntries_();

  private getSelectedEntries_(): HistoryEntry[] {
    // `selectedItems` is a Set<number> of row-indexes.
    return Array.from(this.selectedItems, idx => this.historyData_[idx]);
  }
