package vn.codegym.bookstore_api.dto.projections;

public interface BookProjection {
    Integer getId();

    String getName();

    String getDescription();

    String getImage();

    Double getPrice();

    Integer getNumberOfPage();

    Boolean getIsDeleted();

    String getCategoryName();

    String getAuthorName();

    String getCompanyName();

    Integer getCategoryId();

    Integer getAuthorId();

    Integer getCompanyId();
}
