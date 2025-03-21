﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CarRentalWebAPI.Models;

public partial class UserDocument
{
    [Key]
    public Guid DocumentId { get; set; }

    [Required]
    [StringLength(450)]
    public string UserId { get; set; }

    public int DocumentType { get; set; }

    [Required]
    public string StorageUrl { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime UploadDate { get; set; }

    public string VerificationResult { get; set; }

    [ForeignKey("DocumentType")]
    [InverseProperty("UserDocuments")]
    public virtual DocumentType DocumentTypeNavigation { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("UserDocuments")]
    public virtual ApplicationUser User { get; set; }
}